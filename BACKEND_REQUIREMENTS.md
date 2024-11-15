# Backend Requirements Specification

## API Endpoints

### Authentication
```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET /api/auth/me
```

### Teams
```
GET /api/teams
GET /api/teams/:id
POST /api/teams (admin)
PUT /api/teams/:id (admin)
DELETE /api/teams/:id (admin)
```

### Performances
```
GET /api/performances
GET /api/performances/:id
POST /api/performances (admin)
PUT /api/performances/:id (admin)
DELETE /api/performances/:id (admin)
```

### Votes
```
POST /api/votes
GET /api/votes/results
GET /api/votes/user-votes
DELETE /api/votes/:id (admin)
```

## Database Schema

### User Collection
```typescript
{
  _id: ObjectId,
  name: string,
  email: string,
  password: string (hashed),
  role: "user" | "admin",
  createdAt: Date,
  updatedAt: Date
}
```

### Team Collection
```typescript
{
  _id: ObjectId,
  name: string,
  image: string,
  description: string,
  origin: string,
  yearFormed: number,
  members: number,
  achievements: string[],
  createdAt: Date,
  updatedAt: Date
}
```

### Performance Collection
```typescript
{
  _id: ObjectId,
  teamId: ObjectId,
  title: string,
  videoUrl: string,
  category: "classical" | "contemporary" | "jazz",
  createdAt: Date,
  updatedAt: Date
}
```

### Vote Collection
```typescript
{
  _id: ObjectId,
  userId: ObjectId,
  performanceId: ObjectId,
  category: string,
  timestamp: Date
}
```

## Security Requirements

1. Password Hashing
   - Use bcrypt for password hashing
   - Minimum password length: 8 characters

2. Authentication
   - JWT-based authentication
   - Token expiration: 24 hours
   - Refresh token mechanism

3. Rate Limiting
   - Max 100 requests per IP per 15 minutes
   - Max 5 failed login attempts per hour

4. Input Validation
   - Sanitize all user inputs
   - Validate email formats
   - Validate video URLs

## Business Rules

1. Voting
   - One vote per category per user
   - Users must be authenticated to vote
   - Votes cannot be changed once cast
   - Voting closes at specified end date

2. Performance Categories
   - Each performance must belong to one category
   - Categories: classical, contemporary, jazz

3. Results
   - Real-time vote counting
   - Results visible to admins always
   - Public results shown after voting ends

## Technical Requirements

1. Node.js Environment
   - Node.js 18+
   - Express.js framework
   - TypeScript for type safety

2. Database
   - MongoDB 5+
   - Mongoose ODM
   - Indexes on frequently queried fields

3. Caching
   - Redis for caching
   - Cache team and performance data
   - Cache voting results

4. Testing
   - Jest for unit tests
   - Supertest for API testing
   - 80% minimum test coverage

5. Monitoring
   - Error logging
   - Performance metrics
   - API usage statistics

## Deployment Requirements

1. Environment Configuration
   - Use environment variables
   - Separate configs for dev/prod

2. CI/CD
   - Automated testing
   - Automated deployment
   - Version control (Git)

3. Performance
   - Response time < 200ms
   - 99.9% uptime
   - Handle 1000+ concurrent users

4. Scalability
   - Horizontal scaling ready
   - Load balancing support
   - Database replication