using System;
using System.Collections.Generic;

namespace WebApiPipeNetwork.Models;

public partial class Deal
{
    public double Amount { get; set; }

    public string Name { get; set; } = null!;

    public string Type { get; set; } = null!;

    public string State { get; set; } = null!;

    public DateOnly ClosingDate { get; set; }

    public int? User { get; set; }

    public int? Lead { get; set; }

    public int Id { get; set; }
}
