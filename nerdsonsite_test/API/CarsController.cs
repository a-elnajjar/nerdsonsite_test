using nerdsonsite_test.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace nerdsonsite_test.API
{
    public class CarsController : ApiController
    {
        private static readonly ICarRepository _cars = new CarRepository();
        // GET api/<controller>
        public IEnumerable<Car> Get()
        {
            return _cars.GetAllCars();
        }

        // GET api/<controller>/5
        public Car Get(int id)
        {
            var  c = _cars.GetCar(id);
            if (c == null)
                throw new HttpResponseException(HttpStatusCode.NotFound);
            return c;
        }

        // POST api/<controller>
        public Car Post(Car car)
        {
            return _cars.AddCar(car);
        }

        // PUT api/<controller>/5
        public Car Put(Car car)
        {
            if (!_cars.Update(car))
                throw new HttpResponseException(HttpStatusCode.NotFound);
            return car;
        }

        // DELETE api/<controller>/5
        public Car Delete(int id)
        {
            var c = _cars.GetCar(id);
            _cars.Remove(id);
            return c;
        }
    }
}