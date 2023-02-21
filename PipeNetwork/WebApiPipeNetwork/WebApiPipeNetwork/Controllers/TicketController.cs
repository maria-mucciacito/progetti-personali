using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiPipeNetwork.Data;
using WebApiPipeNetwork.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApiPipeNetwork.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        private readonly WgehueebContext _context;

        public TicketController(WgehueebContext context) { 
            _context= context;
        }

        // GET: api/<TicketController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ticket>>> Get()
        {
            return Ok(await _context.Tickets.ToListAsync());
        }

        // GET api/<TicketController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<TicketController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<TicketController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<TicketController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
