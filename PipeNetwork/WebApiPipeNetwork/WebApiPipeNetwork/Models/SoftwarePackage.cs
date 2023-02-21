using System;
using System.Collections.Generic;

namespace WebApiPipeNetwork.Models;

public partial class SoftwarePackage
{
    public string ProductCode { get; set; } = null!;

    public string Description { get; set; } = null!;

    public string Name { get; set; } = null!;

    public string Category { get; set; } = null!;

    public int Id { get; set; }
}
