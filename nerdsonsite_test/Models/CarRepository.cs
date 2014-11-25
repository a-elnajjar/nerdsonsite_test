using System.Collections.Generic;

namespace nerdsonsite_test.Models
{
    public interface ICarRepository
    {
        IEnumerable<Car> GetAllCars();
        Car GetCar(int id);
        Car AddCar(Car car);
        void Remove(int id);
        bool Update(Car car);
    }

    public class CarRepository : ICarRepository
    {
        private readonly CarsEntities _dbCarsEntities;

        public CarRepository()
        {
            _dbCarsEntities = new CarsEntities();
        }


        public IEnumerable<Car> GetAllCars()
        {
            return _dbCarsEntities.Cars;
        }

        public Car GetCar(int id)
        {
            return _dbCarsEntities.Cars.Find(id);
        }

        public Car AddCar(Car car)
        {
            _dbCarsEntities.Cars.Add(car);
            _dbCarsEntities.SaveChanges();
            return car;
        }

        public void Remove(int id)
        {
            Car c = _dbCarsEntities.Cars.Find(id);
            _dbCarsEntities.Cars.Remove(c);
            _dbCarsEntities.SaveChanges();
        }

        public bool Update(Car car)
        {
            Car newCar = _dbCarsEntities.Cars.Find(car.Id);
            if (newCar == null)
            {
                return false;
            }
            newCar.Manufacturer = car.Manufacturer;
            newCar.Make = car.Make;
            newCar.Year = car.Year;
            newCar.Colour = car.Colour;
            newCar.PassengerSeat = car.PassengerSeat;

            _dbCarsEntities.SaveChanges();
            return true;
        }
    }
}