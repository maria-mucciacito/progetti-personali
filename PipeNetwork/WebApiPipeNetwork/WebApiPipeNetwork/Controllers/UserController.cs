using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiPipeNetwork.Data;
using WebApiPipeNetwork.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApiPipeNetwork.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly WgehueebContext _context;

        public UserController(WgehueebContext context)
        {
            _context = context;
        }

        // GET: api/<UserController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> Get()
        {
            return Ok(await _context.Users.ToListAsync());
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetById(int id)
        {
            var user = await _context.Users.FindAsync(id);
            return user == null ? BadRequest("User not found") : Ok(user);
        }

        // POST api/<UserController>
        [HttpPost]
        public async Task<ActionResult<User>> Create(User user)
        {
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = user.Id }, user);
        }


        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult<User>> Update(int id, User user)
        {
            if (id != user.Id) { return BadRequest("Id non corrispondenti"); }
            _context.Entry(user).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<User>> Delete(int id)
        {
            var userToDelete = await _context.Users.FindAsync(id);
            if (userToDelete == null) { return NotFound(); }
            _context.Users.Remove(userToDelete);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
