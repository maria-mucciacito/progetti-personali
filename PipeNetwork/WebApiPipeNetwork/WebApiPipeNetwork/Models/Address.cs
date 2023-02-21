using System;
using System.Collections.Generic;

namespace WebApiPipeNetwork.Models;

public partial class Address
{
    public string State { get; set; } = null!;

    public string Street { get; set; } = null!;

    public string City { get; set; } = null!;

    public int HouseNumber { get; set; }

    public int PostCode { get; set; }

    public long? Company { get; set; }

    public int Id { get; set; }

    public int? User { get; set; }

    public int? Lead { get; set; }

    public int? Contact { get; set; }

    public virtual Contact? ContactNavigation { get; set; }

    public virtual Lead? LeadNavigation { get; set; }

    public virtual User? UserNavigation { get; set; }
}
