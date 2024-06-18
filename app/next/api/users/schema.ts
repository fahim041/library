import { z } from 'zod';

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email()
});

export type schemaType = z.infer<typeof schema>;

export default schema;
