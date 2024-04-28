// Querying Data:
// 	Retrieve all listings where the property_type is "Apartment".
db.listingsAndReviews.find({ property_type: 'Apartment' });
// 	Find all listings where the price is less than $200.
db.listingsAndReviews.find({ price: { $lt: 200 } });
// 	Fetch all listings where the accommodates value is greater than or equal to 4.
db.listingsAndReviews.find({ accommodates: { $gte: 4 } });

// Updating Data:
// 	Update the house_rules of the listing with _id "10009999" to add a new rule: "No pets allowed".
update;
db.listingsAndReviews.updateOne(
  { _id: '10009999' },
  { $set: { house_rules: 'No pets allowed' } }
);
// 	Increase the cleaning_fee of the listing with _id "1001265" by $20.
db.listingsAndReviews.updateOne(
  { _id: '1001265' },
  {
    $inc: {
      cleaning_fee: 20,
    },
  }
);

// Deleting Data:
// 	Remove the listing with _id "1001265" from the database.
delete db.listingsAndReviews.deleteOne({ _id: '1001265' });

// Finding Specific Information:
// 	Find the host name, host location, and host about information for the listing with _id "10009999".
db.listingsAndReviews.find(
  { _id: '10009999' },
  { 'host.host_location': 1, 'host.host_about': 1, 'host.host_name': 1 }
);
// 	Retrieve the number of reviews, review scores, and last review date for the listing with _id "1001265".
db.listingsAndReviews.find(
  { _id: '10006546' },
  { reviews_scores: 1, last_review: 1, number_of_reviews: 1 }
);

// Querying Nested Data:
// 	Find all listings where the host's host_location is "Rio de Janeiro, State of Rio de Janeiro, Brazil".
db.listingsAndReviews.find({
  'host.host_location': 'Rio de Janeiro, State of Rio de Janeiro, Brazil',
});
// 	Retrieve all listings where the amenities array includes "Wifi" and "Kitchen".
db.listingsAndReviews.find({ amenities: { $all: ['Wifi', 'Kitchen'] } });

// Updating Nested Data:
// 	Update the interaction field of the listing with _id "1001265" to change the text to "We strive to provide 	responsive management and assistance throughout your stay.".
db.listingsAndReviews.updateOne(
  { _id: '10009999' },
  {
    $set: {
      interaction:
        'We strive to provide responsive management and assistance throughout your stay.',
    },
  }
);

// Deleting Nested Data:
// 	Remove the neighborhood_overview field from the listing with _id "10009999".
db.listingsAndReviews.updateOne(
  { _id: '10009999' },
  {
    $unset: {
      neighborhood_overview:
        'This charming ground floor flat is located in Horto, a quiet and bucol…',
    },
  }
);

// Finding by Date:
// 	Find all listings where the last_review date is after January 1st, 2019.
db.listingsAndReviews.find({ last_review: { $gt: ISODate('2019-01-01') } });

// Aggregation:
// 	Calculate the average price of all listings.
db.listingsAndReviews.aggregate([
  {
    $group: {
      _id: null,
      averagePrice: { $avg: '$price' },
    },
  },
]);
// 	Find the host with the most listings.
db.listingsAndReviews.aggregate([
  { $group: { _id: '$host.host_id', count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 },
]);

// Text Search:
// 	Search for listings that contain the word "ocean" in either the summary or description fields.
db.listingsAndReviews.find({
  $or: [
    { summary: { $regex: /ocean/i } },
    { description: { $regex: /ocean/i } },
  ],
});
// 	Search for listings in Honolulu that mention "pool" in their amenities.
db.listingsAndReviews.find({
  $and: [
    { 'address.street': { $regex: /Honolulu/, $options: 'i' } },
    { amenities: { $regex: /pool/, $options: 'i' } },
  ],
});

// Count:
// 	Count the total number of listings in the database.
db.listingsAndReviews.count();
// 	Count the number of listings where the beds field is greater than 1.
db.listingsAndReviews.countDocuments({ beds: { $gt: 1 } });

// Increment or Decrement:
// 	Increment the number_of_reviews field by 1 for the listing with _id "10009999".
db.listingsAndReviews.updateOne(
  { _id: '10009999' },
  { $inc: { number_of_reviews: 1 } }
);
// 	Decrement the availability_365 field by 1 for all listings.
db.listingsAndReviews.updateMany(
  {},
  { $inc: { 'availability.availability_365': -1 } }
);

// Using $or and $and:
// 	Find all listings where the property_type is either "Apartment" or "Condominium".
db.listingsAndReviews.find({
  $or: [{ property_type: 'Apartment' }, { property_type: 'Comodium' }],
});
// 	Retrieve listings where the price is less than $200 and the bedrooms field is greater than or equal to 2.
db.listingsAndReviews.find({
  $and: [{ price: { $lt: 200 } }, { bedrooms: { $gte: 2 } }],
});

// Using $limit:
// 	Retrieve the first 5 listings sorted by price in ascending order.
db.listingsAndReviews.find().limit(5).sort({ price: 1 });
// 	Find all listings where the accommodates field is greater than 2 and limit the result to 10 documents.
db.listingsAndReviews.find({ accommodates: { $gt: 2 } }).limit(10);
