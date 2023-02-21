using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using WebApiPipeNetwork.Models;

namespace WebApiPipeNetwork.Data;

public partial class WgehueebContext : DbContext
{
    public WgehueebContext()
    {
    }

    public WgehueebContext(DbContextOptions<WgehueebContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Activity> Activities { get; set; }

    public virtual DbSet<Address> Addresses { get; set; }

    public virtual DbSet<Company> Companies { get; set; }

    public virtual DbSet<Contact> Contacts { get; set; }

    public virtual DbSet<Deal> Deals { get; set; }

    public virtual DbSet<Lead> Leads { get; set; }

    public virtual DbSet<Person> People { get; set; }

    public virtual DbSet<SoftwarePackage> SoftwarePackages { get; set; }

    public virtual DbSet<Subscription> Subscriptions { get; set; }

    public virtual DbSet<ToDo> Tasks { get; set; }

    public virtual DbSet<Ticket> Tickets { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseNpgsql("Host=lucky.db.elephantsql.com;Database=wgehueeb;Username=wgehueeb;Password=vSyhvB1LzTa4v9pn9EmDvELoGpPVM8fm");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .HasPostgresExtension("btree_gin")
            .HasPostgresExtension("btree_gist")
            .HasPostgresExtension("citext")
            .HasPostgresExtension("cube")
            .HasPostgresExtension("dblink")
            .HasPostgresExtension("dict_int")
            .HasPostgresExtension("dict_xsyn")
            .HasPostgresExtension("earthdistance")
            .HasPostgresExtension("fuzzystrmatch")
            .HasPostgresExtension("hstore")
            .HasPostgresExtension("intarray")
            .HasPostgresExtension("ltree")
            .HasPostgresExtension("pg_stat_statements")
            .HasPostgresExtension("pg_trgm")
            .HasPostgresExtension("pgcrypto")
            .HasPostgresExtension("pgrowlocks")
            .HasPostgresExtension("pgstattuple")
            .HasPostgresExtension("tablefunc")
            .HasPostgresExtension("unaccent")
            .HasPostgresExtension("uuid-ossp")
            .HasPostgresExtension("xml2");

        modelBuilder.Entity<Activity>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("activity_pkey");

            entity.ToTable("activity");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Date).HasColumnName("date");
            entity.Property(e => e.Description)
                .HasMaxLength(200)
                .HasColumnName("description");
            entity.Property(e => e.Time).HasColumnName("time");
            entity.Property(e => e.Type)
                .HasMaxLength(100)
                .HasColumnName("type");
            entity.Property(e => e.User).HasColumnName("user");
        });

        modelBuilder.Entity<Address>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("address_pkey");

            entity.ToTable("address");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.City)
                .HasMaxLength(100)
                .HasColumnName("city");
            entity.Property(e => e.Company).HasColumnName("company");
            entity.Property(e => e.Contact).HasColumnName("contact");
            entity.Property(e => e.HouseNumber).HasColumnName("house_number");
            entity.Property(e => e.Lead).HasColumnName("lead");
            entity.Property(e => e.PostCode).HasColumnName("post_code");
            entity.Property(e => e.State)
                .HasMaxLength(100)
                .HasColumnName("state");
            entity.Property(e => e.Street)
                .HasMaxLength(150)
                .HasColumnName("street");
            entity.Property(e => e.User).HasColumnName("user");

            entity.HasOne(d => d.ContactNavigation).WithMany(p => p.Addresses)
                .HasForeignKey(d => d.Contact)
                .HasConstraintName("contact_fk");

            entity.HasOne(d => d.LeadNavigation).WithMany(p => p.Addresses)
                .HasForeignKey(d => d.Lead)
                .HasConstraintName("lead_fk");

            entity.HasOne(d => d.UserNavigation).WithMany(p => p.Addresses)
                .HasForeignKey(d => d.User)
                .HasConstraintName("user_fk");
        });

        modelBuilder.Entity<Company>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("id");

            entity.ToTable("company");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.BusinessArea)
                .HasMaxLength(100)
                .HasColumnName("business_area");
            entity.Property(e => e.Fax)
                .HasMaxLength(50)
                .HasColumnName("fax");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .HasColumnName("name");
            entity.Property(e => e.PIva)
                .HasMaxLength(50)
                .HasColumnName("p_iva");
            entity.Property(e => e.SiteWeb)
                .HasMaxLength(100)
                .HasColumnName("site_web");
        });

        modelBuilder.Entity<Contact>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("id_pkcon");

            entity.ToTable("contact");

            entity.Property(e => e.Id)
                .HasDefaultValueSql("nextval('person_id_seq'::regclass)")
                .HasColumnName("id");
            entity.Property(e => e.BirthdayDate).HasColumnName("birthday_date");
            entity.Property(e => e.Cf)
                .HasMaxLength(50)
                .HasColumnName("cf");
            entity.Property(e => e.Company).HasColumnName("company");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .HasColumnName("email");
            entity.Property(e => e.Fax)
                .HasMaxLength(50)
                .HasColumnName("fax");
            entity.Property(e => e.FirstName)
                .HasMaxLength(100)
                .HasColumnName("first_name");
            entity.Property(e => e.Job)
                .HasMaxLength(100)
                .HasColumnName("job");
            entity.Property(e => e.LastName)
                .HasMaxLength(150)
                .HasColumnName("last_name");
            entity.Property(e => e.PhoneNumber)
                .HasMaxLength(100)
                .HasColumnName("phone_number");
        });

        modelBuilder.Entity<Deal>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("deal_pkey");

            entity.ToTable("deal");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Amount).HasColumnName("amount");
            entity.Property(e => e.ClosingDate).HasColumnName("closing_date");
            entity.Property(e => e.Lead).HasColumnName("lead");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .HasColumnName("name");
            entity.Property(e => e.State)
                .HasMaxLength(100)
                .HasColumnName("state");
            entity.Property(e => e.Type)
                .HasMaxLength(100)
                .HasColumnName("type");
            entity.Property(e => e.User).HasColumnName("user");
        });

        modelBuilder.Entity<Lead>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("id_pk");

            entity.ToTable("lead");

            entity.Property(e => e.Id)
                .HasDefaultValueSql("nextval('person_id_seq'::regclass)")
                .HasColumnName("id");
            entity.Property(e => e.Cf)
                .HasMaxLength(50)
                .HasColumnName("cf");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .HasColumnName("email");
            entity.Property(e => e.Fax)
                .HasMaxLength(50)
                .HasColumnName("fax");
            entity.Property(e => e.FirstName)
                .HasMaxLength(100)
                .HasColumnName("first_name");
            entity.Property(e => e.Interest)
                .HasMaxLength(50)
                .HasColumnName("interest");
            entity.Property(e => e.Job)
                .HasMaxLength(100)
                .HasColumnName("job");
            entity.Property(e => e.LastName)
                .HasMaxLength(150)
                .HasColumnName("last_name");
            entity.Property(e => e.PhoneNumber)
                .HasMaxLength(100)
                .HasColumnName("phone_number");
            entity.Property(e => e.Source)
                .HasMaxLength(150)
                .HasColumnName("source");
        });

        modelBuilder.Entity<Person>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("person_pkey");

            entity.ToTable("person");

            entity.HasIndex(e => e.Cf, "cf").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Cf)
                .HasMaxLength(50)
                .HasColumnName("cf");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .HasColumnName("email");
            entity.Property(e => e.Fax)
                .HasMaxLength(50)
                .HasColumnName("fax");
            entity.Property(e => e.FirstName)
                .HasMaxLength(100)
                .HasColumnName("first_name");
            entity.Property(e => e.Job)
                .HasMaxLength(100)
                .HasColumnName("job");
            entity.Property(e => e.LastName)
                .HasMaxLength(150)
                .HasColumnName("last_name");
            entity.Property(e => e.PhoneNumber)
                .HasMaxLength(100)
                .HasColumnName("phone_number");
        });

        modelBuilder.Entity<SoftwarePackage>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("software_package_pkey");

            entity.ToTable("software_package");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Category)
                .HasMaxLength(100)
                .HasColumnName("category");
            entity.Property(e => e.Description)
                .HasMaxLength(200)
                .HasColumnName("description");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .HasColumnName("name");
            entity.Property(e => e.ProductCode)
                .HasMaxLength(150)
                .HasColumnName("product_code");
        });

        modelBuilder.Entity<Subscription>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("subscription_pkey");

            entity.ToTable("subscription");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.ActivationCode)
                .HasMaxLength(200)
                .HasColumnName("activation_code");
            entity.Property(e => e.Company).HasColumnName("company");
            entity.Property(e => e.Description)
                .HasMaxLength(200)
                .HasColumnName("description");
            entity.Property(e => e.EndDate).HasColumnName("end_date");
            entity.Property(e => e.NameSubscription)
                .HasMaxLength(150)
                .HasColumnName("name_subscription");
            entity.Property(e => e.Price).HasColumnName("price");
            entity.Property(e => e.Software).HasColumnName("software");
            entity.Property(e => e.StartDate).HasColumnName("start_date");
            entity.Property(e => e.Type)
                .HasMaxLength(100)
                .HasColumnName("type");
        });

        modelBuilder.Entity<ToDo>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("task_pkey");

            entity.ToTable("task");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Date).HasColumnName("date");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .HasColumnName("name");
            entity.Property(e => e.State)
                .HasMaxLength(100)
                .HasColumnName("state");
            entity.Property(e => e.User).HasColumnName("user");
        });

        modelBuilder.Entity<Ticket>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("ticket_pkey");

            entity.ToTable("ticket");

            entity.Property(e => e.Id)
                .HasDefaultValueSql("nextval('\"ticket_ID_seq\"'::regclass)")
                .HasColumnName("id");
            entity.Property(e => e.Comment)
                .HasMaxLength(150)
                .HasColumnName("comment");
            entity.Property(e => e.Description)
                .HasMaxLength(200)
                .HasColumnName("description");
            entity.Property(e => e.OpeningDate).HasColumnName("opening_date");
            entity.Property(e => e.Title)
                .HasMaxLength(100)
                .HasColumnName("title");
            entity.Property(e => e.User).HasColumnName("user");

            entity.HasOne(d => d.UserNavigation).WithMany(p => p.Tickets)
                .HasForeignKey(d => d.User)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("user");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("user_pkey");

            entity.ToTable("user");

            entity.Property(e => e.Id)
                .HasDefaultValueSql("nextval('person_id_seq'::regclass)")
                .HasColumnName("id");
            entity.Property(e => e.AccessToken)
                .HasMaxLength(300)
                .HasColumnName("access_token");
            entity.Property(e => e.Cf)
                .HasMaxLength(50)
                .HasColumnName("cf");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .HasColumnName("email");
            entity.Property(e => e.Fax)
                .HasMaxLength(50)
                .HasColumnName("fax");
            entity.Property(e => e.FirstName)
                .HasMaxLength(100)
                .HasColumnName("first_name");
            entity.Property(e => e.Job)
                .HasMaxLength(100)
                .HasColumnName("job");
            entity.Property(e => e.LastName)
                .HasMaxLength(150)
                .HasColumnName("last_name");
            entity.Property(e => e.Password)
                .HasMaxLength(100)
                .HasColumnName("password");
            entity.Property(e => e.PhoneNumber)
                .HasMaxLength(100)
                .HasColumnName("phone_number");
            entity.Property(e => e.Role)
                .HasMaxLength(100)
                .HasColumnName("role");
            entity.Property(e => e.Username)
                .HasMaxLength(100)
                .HasColumnName("username");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
