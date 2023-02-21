using System;
using System.Collections.Generic;

namespace WebApiPipeNetwork.Models;

public partial class Activity
{
    public string Type { get; set; } = null!;

    public DateOnly Date { get; set; }

    public TimeOnly Time { get; set; }

    public string Description { get; set; } = null!;

    public int User { get; set; }

    public int Id { get; set; }
}
