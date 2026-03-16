import { auth } from '../utils/auth'
import { database } from './connection'
import usersData from './users.json' with { type: "json" }

await database.schema
    .createTable("bio")
    .ifNotExists()
    .addColumn("id", "integer", (col) => col.primaryKey().autoIncrement())
    .addColumn("firstName", "text", (col) => col.notNull())
    .addColumn("lastName", "text", (col) => col.notNull())
    .addColumn("gender", "text", (col) => col.notNull())
    .addColumn("userId", "text", (col) => col.notNull())
    .execute()

for (const user of usersData["users"]) {
    try {
        const createdUser = await auth.api.signUpEmail({
            body: {
                name: user.username,
                email: user.email,
                password: user.password,
                image: user.image
            }
        })

        // TODO
        // Создавать записи в таблице bio используя kysely
        // и соответствующие данные из user и createdUser
    } catch (error) {
        console.error(error)
    }
}