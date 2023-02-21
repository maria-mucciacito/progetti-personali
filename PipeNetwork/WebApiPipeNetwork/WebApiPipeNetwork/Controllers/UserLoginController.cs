using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using WebApiPipeNetwork.Data;
using WebApiPipeNetwork.Models;

namespace WebApiPipeNetwork.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserLoginController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly WgehueebContext _context;
        private UserController userController;

        public UserLoginController(WgehueebContext context, IConfiguration configuration)
        {
            _configuration = configuration;
            _context = context;
            this.userController = new UserController(_context);
        }

        private String CreateToken(UserLogin user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name , user.Username)
            };

            string secret = "my top secret token hahhahaaha";
            var key = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(secret));
            //_configuration.GetSection("AppSettings: Token").Value

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddSeconds(1),
                signingCredentials: creds);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }

        //POST /api/Controller/login
        [HttpPost("login")]
        public async Task<ActionResult<List<User>>> Login([FromBody] UserLogin user)
        {
            //username = JsonConvert.SerializeObject(JsonConvert.DeserializeObject<dynamic>(username));
            //pwd = JsonConvert.SerializeObject(JsonConvert.DeserializeObject<dynamic>(pwd));

            var listUsers = await _context.Users.ToListAsync();
            //UserLogin user = new UserLogin(user.Username, user.Password);

            for (int i = 0; i < listUsers.Count; i++)
            {
                if (listUsers[i].Username.Equals(user.Username))
                {
                    if (listUsers[i].Password.Equals(user.Password))
                    {
                        string token = CreateToken(user);
                        //user.AccessToken = token;
                        
                        listUsers[i].AccessToken = token;
                        return Ok(listUsers[i]);
                    }
                    return BadRequest("Uncorrect password");
                }
            }
            return BadRequest("User not found");
        }
    }
}
