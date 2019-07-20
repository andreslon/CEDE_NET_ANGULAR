using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using cedesistemas_api.Models;

namespace cedesistemas_api.Controllers
{
    public class UsersController : ApiController
    {
        private CedesistemasEntities db = new CedesistemasEntities();

        // GET: api/Users
        public IQueryable<users> Getusers()
        {
            return db.users;
        }

        // GET: api/Users/5
        [ResponseType(typeof(users))]
        public async Task<IHttpActionResult> Getusers(int id)
        {
            users users = await db.users.FindAsync(id);
            if (users == null)
            {
                return NotFound();
            }

            return Ok(users);
        }

        // PUT: api/Users/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> Putusers(int id, users users)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != users.Id)
            {
                return BadRequest();
            }

            db.Entry(users).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!usersExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Users
        [ResponseType(typeof(users))]
        public async Task<IHttpActionResult> Postusers(users users)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.users.Add(users);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = users.Id }, users);
        }

        // DELETE: api/Users/5
        [ResponseType(typeof(users))]
        public async Task<IHttpActionResult> Deleteusers(int id)
        {
            users users = await db.users.FindAsync(id);
            if (users == null)
            {
                return NotFound();
            }

            db.users.Remove(users);
            await db.SaveChangesAsync();

            return Ok(users);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool usersExists(int id)
        {
            return db.users.Count(e => e.Id == id) > 0;
        }
    }
}