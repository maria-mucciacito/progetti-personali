using System;
using System.Collections.Generic;

namespace WebApiPipeNetwork.Models;

public partial class User
{
    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string? Fax { get; set; }

    public string Job { get; set; } = null!;

    public string Username { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string Role { get; set; } = null!;

    public string Cf { get; set; } = null!;

    public string? AccessToken { get; set; }

    public int Id { get; set; }

    public string Email { get; set; } = null!;

    public string PhoneNumber { get; set; } = null!;

    public virtual ICollection<Address> Addresses { get; } = new List<Address>();

    public virtual ICollection<Ticket> Tickets { get; } = new List<Ticket>();
}
