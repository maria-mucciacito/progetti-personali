using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiPipeNetwork.Data;
using WebApiPipeNetwork.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApiPipeNetwork.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private readonly WgehueebContext _context;

        public CompanyController(WgehueebContext context)
        {
            _context = context;
        }


        // GET: api/<CompanyController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Company>>> Get()
        {
            return Ok(await _context.Companies.ToListAsync());
        }

        // GET api/<CompanyController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Company>> GetById(int? id)
        {
            var _id = Convert.ToInt32(id);
            var company = await _context.Companies.FindAsync(_id);
            return company == null ? BadRequest("Company not found") : Ok(company);
        }

        // POST api/<CompanyController>
        [HttpPost]
        public async Task<ActionResult<Company>> Create([FromBody] Company company)
        {
            await _context.Companies.AddAsync(company);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = company.Id }, company);
        }

        // PUT api/<CompanyController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Company>> Update(int id, Company company)
        {
            if (id != company.Id) { return BadRequest("Id non corrispondenti"); }
            _context.Entry(company).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE api/<CompanyController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Company>> Delete(long id)
        {

            var companyToDelete = await _context.Companies.FindAsync(id);
            if (companyToDelete == null) { return NotFound(); }
            _context.Companies.Remove(companyToDelete);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
