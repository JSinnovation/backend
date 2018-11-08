const pool = require('../../databasePool');
//static function can directly use function without an instance

class GenerationTable {
  static storeGeneration(generation) {
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO generation(expiration) VALUES($1) RETURNING id',
        [generation.expiration],
        (error, response) => {
          if (error) return reject(error);
   
          const generationId = response.rows[0].id;
          //use a javascript promise to return data
          resolve({ generationId });
        }
      );
    });
 
    }
}



module.exports = GenerationTable;