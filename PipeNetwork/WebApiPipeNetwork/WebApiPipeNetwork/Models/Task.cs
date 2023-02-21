using System;
using System.Collections.Generic;

namespace WebApiPipeNetwork.Models;

public partial class ToDo
{
    public string Name { get; set; } = null!;

    public string State { get; set; } = null!;

    public DateOnly Date { get; set; }

    public int User { get; set; }

    public int Id { get; set; }
}
