using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiPipeNetwork.Data;
using WebApiPipeNetwork.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApiPipeNetwork.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SoftwarePackageController : ControllerBase
    {
        private readonly WgehueebContext _context;

        public SoftwarePackageController(WgehueebContext context)
        {
            _context = context;
        }

        // GET: api/<SoftwarePackageController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SoftwarePackage>>> Get()
        {
            return Ok(await _context.SoftwarePackages.ToListAsync());
        }

        // GET api/<SoftwarePackageController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SoftwarePackage>> GetById(int id)
        {
            var software = await _context.SoftwarePackages.FindAsync(id);
            return software == null ? BadRequest("Software Package not found") : Ok(software);
        }

        // POST api/<SoftwarePackageController>
        [HttpPost]
        public async Task<ActionResult<SoftwarePackage>> Create(SoftwarePackage software)
        {
            await _context.SoftwarePackages.AddAsync(software);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = software.Id }, software);
        }

        // PUT api/<SoftwarePackageController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult<SoftwarePackage>> Update(int id, SoftwarePackage software)
        {
            if (id != software.Id) { return BadRequest("Id non corrispondenti"); }
            _context.Entry(software).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE api/<SoftwarePackageController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<SoftwarePackage>> Delete(int id)
        {
            var softwareToDelete = await _context.SoftwarePackages.FindAsync(id);
            if (softwareToDelete == null) { return NotFound(); }
            _context.SoftwarePackages.Remove(softwareToDelete);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
