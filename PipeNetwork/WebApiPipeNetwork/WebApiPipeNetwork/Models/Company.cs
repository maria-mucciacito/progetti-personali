using System;
using System.Collections.Generic;

namespace WebApiPipeNetwork.Models;

public partial class Company
{
    public string Name { get; set; } = null!;

    public string Fax { get; set; } = null!;

    public string BusinessArea { get; set; } = null!;

    public string SiteWeb { get; set; } = null!;

    public string PIva { get; set; } = null!;

    public int Id { get; set; }
}
