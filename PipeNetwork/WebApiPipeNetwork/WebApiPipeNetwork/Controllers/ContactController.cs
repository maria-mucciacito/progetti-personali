using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiPipeNetwork.Data;
using WebApiPipeNetwork.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApiPipeNetwork.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly WgehueebContext _context;

        public ContactController(WgehueebContext context)
        {
            _context = context;
        }


        // GET: api/<ContactController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Contact>>> Get()
        {
            return Ok(await _context.Contacts.ToListAsync());
        }


        // GET api/<ContactController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Contact>> GetById(int id)
        {
            var contact = await _context.Contacts.FindAsync(id);
            return contact == null ? BadRequest("Contact not found") : Ok(contact);
        }

        // POST api/<ContactController>
        [HttpPost]
        public async Task<ActionResult<Contact>> Create([FromBody]Contact contact)
        {
            await _context.Contacts.AddAsync(contact);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = contact.Id }, contact);
        }

        // PUT api/<ContactController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Contact>> Update(int id, Contact contact)
        {
            if (id != contact.Id) { return BadRequest("Id non corrispondenti"); }
            _context.Entry(contact).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE api/<ContactController>/5
        [HttpDelete("{id:int}")]
        public async Task<ActionResult<Contact>> Delete(int id)
        {
           
            var contactToDelete = await _context.Contacts.FindAsync(id);
            if (contactToDelete == null) { return NotFound(); }
            _context.Contacts.Remove(contactToDelete);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
