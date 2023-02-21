using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApiPipeNetwork.Data;
using WebApiPipeNetwork.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApiPipeNetwork.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivityController : ControllerBase
    {
        private readonly WgehueebContext _context;

        public ActivityController(WgehueebContext context)
        {
            _context = context;
        }


        // GET: api/<ActivityController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Activity>>> Get()
        {
            return Ok(await _context.Activities.ToListAsync());
        }

        // GET api/<ActivityController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetById(int id)
        {
            var activity = await _context.Activities.FindAsync(id);
            return activity == null ? BadRequest("Activity not found") : Ok(activity);
        }

        // POST api/<ActivityController>
        [HttpPost]
        public async Task<ActionResult<Activity>> Create([FromBody] Activity activity)
        {
            await _context.Activities.AddAsync(activity);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = activity.Id }, activity);
        }

        // PUT api/<ActivityController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Activity>> Update(int id, Activity activity)
        {
            if (id != activity.Id) { return BadRequest("Id non corrispondenti"); }
            _context.Entry(activity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE api/<ActivityController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Activity>> Delete(int id)
        {

            var activityToDelete = await _context.Activities.FindAsync(id);
            if (activityToDelete == null) { return NotFound(); }
            _context.Activities.Remove(activityToDelete);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
