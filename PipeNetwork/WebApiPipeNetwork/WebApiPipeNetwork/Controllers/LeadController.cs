using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiPipeNetwork.Data;
using WebApiPipeNetwork.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApiPipeNetwork.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeadController : ControllerBase
    {
        private readonly WgehueebContext _context;

        public LeadController(WgehueebContext context)
        {
            _context = context;
        }

        // GET: api/<LeadController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Lead>>> Get()
        {
            return Ok(await _context.Leads.ToListAsync());
        }

        // GET api/<LeadController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Lead>> GetById(int id)
        {
            var lead = await _context.Leads.FindAsync(id);
            return lead == null ? BadRequest("Lead not found") : Ok(lead);
        }

        // POST api/<LeadController>
        [HttpPost]
        public async Task<ActionResult<Lead>> Create([FromBody] Lead lead)
        {
            await _context.Leads.AddAsync(lead);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = lead.Id }, lead);
        }

        // PUT api/<LeadController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Lead>> Update(int id, Lead lead)
        {
            if (id != lead.Id) { return BadRequest("Id non corrispondenti"); }
            _context.Entry(lead).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE api/<LeadController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Lead>> Delete(int id)
        {

            var leadToDelete = await _context.Leads.FindAsync(id);
            if (leadToDelete == null) { return NotFound(); }
            _context.Leads.Remove(leadToDelete);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
