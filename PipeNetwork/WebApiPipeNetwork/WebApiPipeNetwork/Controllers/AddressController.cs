using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiPipeNetwork.Data;
using WebApiPipeNetwork.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApiPipeNetwork.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressController : ControllerBase
    {
        private readonly WgehueebContext _context;

        public AddressController(WgehueebContext context)
        {
            _context = context;
        }

        // GET: api/<AddressController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Address>>> Get()
        {
            return Ok(await _context.Addresses.ToListAsync());
        }

        // GET api/<AddressController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Address>> GetById(int id)
        {
            var address = await _context.Addresses.FindAsync(id);
            return address == null ? BadRequest("Address not found") : Ok(address);
        }

        // POST api/<AddressController>
        [HttpPost]
        public async Task<ActionResult<Address>> Create([FromBody] Address address)
        {
            await _context.Addresses.AddAsync(address);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = address.Id }, address);
        }

        // PUT api/<AddressController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Address>> Update(int id, Address address)
        {
            if (id != address.Id) { return BadRequest("Id non corrispondenti"); }
            _context.Entry(address).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE api/<AddressController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Address>> Delete(int id)
        {

            var addressToDelete = await _context.Addresses.FindAsync(id);
            if (addressToDelete == null) { return NotFound(); }
            _context.Addresses.Remove(addressToDelete);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
