using System;
using System.Collections.Generic;

namespace WebApiPipeNetwork.Models;

public partial class Lead
{
    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string? Fax { get; set; }

    public string Job { get; set; } = null!;

    public string Cf { get; set; } = null!;

    public int Id { get; set; }

    public string Source { get; set; } = null!;

    public string Interest { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string PhoneNumber { get; set; } = null!;

    public virtual ICollection<Address> Addresses { get; } = new List<Address>();
}
