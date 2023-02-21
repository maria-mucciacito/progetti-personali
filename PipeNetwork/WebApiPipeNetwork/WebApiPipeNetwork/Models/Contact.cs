using System;
using System.Collections.Generic;

namespace WebApiPipeNetwork.Models;

public partial class Contact
{
    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string? Fax { get; set; }

    public string Job { get; set; } = null!;

    public string Cf { get; set; } = null!;

    public int Id { get; set; }

    public int? Company { get; set; }

    public DateOnly BirthdayDate { get; set; }

    public string Email { get; set; } = null!;

    public string PhoneNumber { get; set; } = null!;

    public virtual ICollection<Address> Addresses { get; } = new List<Address>();
}
