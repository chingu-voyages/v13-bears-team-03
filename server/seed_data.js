import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

//Set up default mongoose connection
const mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Define a schema
const Schema = mongoose.Schema;
const VehiclesSchema = new Schema({
    vehicle_model: {
        type: String,
        required: [true, 'Model is missing'],
    },
    vehicle_price: {
        type: Number,
        required: [true, 'Price is missing']
    },
    vehicle_type: {
        type: String,
        required: [true, 'Type is missing'],
    },
    vehicle_type: {
        type: Array,
    },
    description: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
});

const ConfigSchema = new Schema({
    table: {
        type: String,
        required: [true, 'Collection name is missing'],
    },
    seed: {
        type: Boolean,
        required: [true, 'Collection status is missing'],
    },
});

const UsersSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Model is missing'],
    },
    password: {
        type: String,
        required: [true, 'Password is missing'],
    },
    office_location: {
        type: String,
        required: [true, 'office location is missing'],
    },
});
export const Vehicles = mongoose.model('Vehicles', VehiclesSchema);
export const Users = mongoose.model('Users', UsersSchema);
const Config = mongoose.model('Config', ConfigSchema);

const availableTrucks = [
    {
        vehicle_model: 'Tesla',
        vehicle_price: '674',
        vehicle_type: 'truck',
        city: 'Berlin',
        available: ['6:30', '7:00', '7:30', '8:00'],
        description: 'this is a great car',
        imageUrl: 'https://s29755.pcdn.co/wp-content/uploads/2019/08/2019_Top_Five_Class_5-Mack.jpg'
    },
    {
        vehicle_model: 'Agrale Marruá',
        vehicle_price: '329',
        vehicle_type: 'truck',
        city: 'Hamburg',
        available: ['6:30', '7:00', '7:30', '11:00', '12:00'],
        description: 'this is a great car',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Marr%C3%BAa-EJE.jpg/180px-Marr%C3%BAa-EJE.jpg'
    },
    {
        vehicle_model: 'VAZ-2329',
        vehicle_price: '465',
        vehicle_type: 'truck',
        city: 'Munich',
        available: ['6:30', '7:30', '8:00'],
        description: 'this is a great car',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/VAZ-2329-1_pickup.jpg/180px-VAZ-2329-1_pickup.jpg'
    },
    {
        vehicle_model: 'Bremach T-Rex',
        vehicle_price: '621',
        vehicle_type: 'truck',
        city: 'Frankfurt',
        available: ['6:00', '7:00', '7:30', '14:30'],
        description: 'this is a great car',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Bremach_Trex.jpg/180px-Bremach_Trex.jpg'
    },
    {
        vehicle_model: "Chang'an Star Truck",
        vehicle_price: '324',
        vehicle_type: 'truck',
        city: 'Leipzig',
        available: ['12:30', '13:00', '13:30'],
        description: 'this is a great car',
        imageUrl: 'https://en.wikipedia.org/wiki/File:Chang%27an_fish_carrier_at_a_restaurant_in_Miyun_(20150215120552).JPG'
    },
    {
        vehicle_model: 'Chevrolet Colorado/S-10',
        vehicle_price: '334',
        vehicle_type: 'truck',
        city: 'Cologne',
        available: ['13:00', '13:30', '14:00' ],
        description: 'this is a great car',
        imageUrl: 'https://en.wikipedia.org/wiki/File:Brazilian_2012_All-New_Chevy_S10.jpg'
    },
    {
        vehicle_model: 'Chevrolet D-Max',
        vehicle_price: '726',
        vehicle_type: 'truck',
        city: 'Stuttgart',
        available: ['6:30', '7:00', '7:30', '8:00'],
        description: 'this is a great car',
        imageUrl: 'https://en.wikipedia.org/wiki/File:Dmax_2011_ls_3.0_td.jpg'
    },
    {
        vehicle_model: 'Chevrolet LSSV (Milverado)',
        vehicle_price: '223',
        vehicle_type: 'truck',
        city: 'Nuremberg',
        available: ['6:30', '7:00', '7:30', '8:00'],
        description: 'this is a great car',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/MP_MilCOTS.jpg/180px-MP_MilCOTS.jpg'
    },
    {
        vehicle_model: 'Chevrolet Silverado 1500',
        vehicle_price: '222',
        vehicle_type: 'truck',
        city: 'Dresden',
        available: ['6:30', '7:00', '7:30', '8:00'],
        description: 'this is a great car',
        imageUrl: 'https://en.wikipedia.org/wiki/File:%2716_Chevrolet_Silverado_Crew_Cab_(Carrefour_Angrignon).jpg'
    },
    {
        vehicle_model: 'Chevrolet Silverado 1500 Hybrid',
        vehicle_price: '554',
        vehicle_type: 'truck',
        city: 'Bonn',
        available: ['6:30', '7:00', '7:30', '8:00'],
        description: 'this is a great car',
        imageUrl: 'https://en.wikipedia.org/wiki/File:Chevrolet_Silverado_Hybrid--DC.jpg'
    },
    {
        vehicle_model: 'Chevrolet Silverado 2500',
        vehicle_price: '132',
        vehicle_type: 'truck',
        city: 'Hanover',
        available: ['6:30', '7:00', '7:30', '8:00'],
        description: 'this is a great car',
        imageUrl: 'https://en.wikipedia.org/wiki/File:Chevrolet_Silverado_2500HD_Regular_Cab_Love%27s.jpg'
    },
    {
        vehicle_model: 'Chevrolet Montana',
        vehicle_price: '883',
        vehicle_type: 'truck',
        city: 'Berlin',
        available: ['11:00', '11:30', '12:00', '12:30'],
        description: 'this is a great car',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/2011_montana_1.8_sport.jpg/180px-2011_montana_1.8_sport.jpg'
    },
    {
        vehicle_model: 'Daihatsu Hijet',
        vehicle_price: '443',
        vehicle_type: 'truck',
        city: 'Dortmund',
        available: ['11:00', '11:30', '12:00', '12:30'],
        description: 'this is a great car',
        imageUrl: 'https://en.wikipedia.org/wiki/File:DaihatsuHijet123.jpg'
    },
    {
        vehicle_model: 'Dongfeng Rich',
        vehicle_price: '254',
        vehicle_type: 'truck',
        city: 'Trier',
        available: ['11:00', '11:30', '12:00', '12:30'],
        description: 'this is a great car',
        imageUrl: 'https://en.wikipedia.org/wiki/File:Dongfeng_Rich_China_2012-06-02.JPG'
    }
];
const usersData = [
    {
        username: 'admin',
        password: 'admin',
        office_location: 'Berlin'
    },
    {
        username: 'tester',
        password: 'tester',
        office_location: 'Berlin'
    },
    {
        username: 'schneider',
        password: 'schneider',
        office_location: 'Hamburg'
    },
];

export const initDB = () => {
    Config.find({table : 'Vehicles', seed: true}, (error, config) => {
        if(config.length > 1);
        {
            console.log('Vechiles collection is seeded');
        }
        if(config.length === 0){
            Vehicles.insertMany(availableTrucks, (error) => {
                if (error) {
                    console.log(error);
                    return handleError(error);
                }
                console.log('Seeding demo vehicles data');
                Config.create({table : 'Vehicles', seed: true}, (error) => {
                    if (error) {
                        console.log(error);
                        return handleError(error);
                    }
                });
            });
        }
    });
    Config.find({table : 'Users', seed: true}, (error, config) => {
        if(config.length > 1);
        {
            console.log('Users collection is seeded');
        }
        if(config.length === 0){
            Users.insertMany(usersData, (error) => {
                if (error) {
                    console.log(error);
                    return handleError(error);
                }
                console.log('Seeding demo users data');
                Config.create({table : 'Users', seed: true}, (error) => {
                    if (error) {
                        console.log(error);
                        return handleError(error);
                    }
                });
            });
        }
    });
};

