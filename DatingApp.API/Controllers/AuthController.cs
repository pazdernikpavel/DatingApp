using System.Threading.Tasks;
using DatingApp.API.Data;
using DatingApp.API.Dtos;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly IAuthRepository _repository;

        public AuthController(IAuthRepository repository)
        {
            this._repository = repository;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody]UserForRegisterDto userForRegisterDto)
        {
            userForRegisterDto.UserName = userForRegisterDto.UserName.ToLower();

            // request validation
            if (await _repository.UserExists(userForRegisterDto.UserName)) 
                ModelState.AddModelError("Username", "Username already exists");

            if(!ModelState.IsValid) 
                return BadRequest(ModelState);

            // creating a new user
            var userToCreate = new User
            {
                Username = userForRegisterDto.UserName
            };

            var createUser = await _repository.Register(userToCreate, userForRegisterDto.Password);

            // this will be replaced with CreatedAtRoute method
            return StatusCode(201);
        }

    }
}