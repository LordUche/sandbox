import db from './config';

function migrate() {
  db.tx(trx => trx.batch([
    trx.none('DROP TABLE IF EXISTS incidents'),
    trx.none('DROP TABLE IF EXISTS users'),
    trx.none('DROP TYPE IF EXISTS incident'),
    trx.none('DROP TYPE IF EXISTS status'),
    trx.none("CREATE TYPE incident AS ENUM ('red-flag', 'intervention')"),
    trx.none(
      "CREATE TYPE status AS ENUM ('draft', 'under investigation', 'rejected', 'resolved')",
    ),
    trx.none(`CREATE TABLE users (
  ID serial PRIMARY KEY,
  firstname varchar NOT NULL,
  lastname varchar NOT NULL,
  othernames varchar,
  email varchar NOT NULL UNIQUE,
  phoneNumber varchar NOT NULL UNIQUE,
  username varchar NOT NULL UNIQUE,
  registered timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  isAdmin boolean NOT NULL DEFAULT false,
  passwordHash varchar NOT NULL
)`),
    trx.none(`CREATE TABLE incidents (
  ID serial PRIMARY KEY,
  createdOn timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  createdBy int NOT NULL references users(ID) ON DELETE CASCADE,
  type incident NOT NULL,
  location varchar NOT NULL,
  status status NOT NULL DEFAULT 'draft',
  Images varchar[],
  Videos varchar[],
  comment varchar NOT NULL
)`),
    trx.none(
      "INSERT INTO users (firstname, lastname, othernames, email, phoneNumber, username, passwordHash, isAdmin) VALUES('Uchenna', 'Iheanacho', 'A.', 'uchennai@live.com', '08099851353', 'lorduche', '$2b$10$EWcx.GVvDBBgOHlYR7243ON2H4wKy/nIvmrt3ZkBHj1qzIcdkT5m2', true)",
    ),
  ]))
    .then(() => console.log('Database migrated successfully'))
    .catch(err => console.log('Error: ', err.message));
}

migrate();
