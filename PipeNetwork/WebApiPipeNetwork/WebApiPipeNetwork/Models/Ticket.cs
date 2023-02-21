using System;
using System.Collections.Generic;

namespace WebApiPipeNetwork.Models;

public partial class Ticket
{
    public string Title { get; set; } = null!;

    public string Comment { get; set; } = null!;

    public string Description { get; set; } = null!;

    public DateOnly OpeningDate { get; set; }

    public int User { get; set; }

    public int Id { get; set; }

    public virtual User UserNavigation { get; set; } = null!;
}
