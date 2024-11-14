'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

interface ContactFormProps {
  onSuccess?: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setSubmitted(true);
    console.log('Form data:', data);
    form.reset();
    if (onSuccess) {
      setTimeout(onSuccess, 2000);
    }
  };

  return (
    <div className="w-full">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
        >
          <p className="text-center">Thank you! We'll get back to you soon.</p>
        </motion.div>
      ) : (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input 
              placeholder="Your Name" 
              {...form.register('name')} 
              className={form.formState.errors.name ? 'border-red-500' : ''}
            />
            {form.formState.errors.name && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
            )}
          </div>
          <div>
            <Input 
              placeholder="Email" 
              type="email" 
              {...form.register('email')} 
              className={form.formState.errors.email ? 'border-red-500' : ''}
            />
            {form.formState.errors.email && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
            )}
          </div>
          <div>
            <Input 
              placeholder="Company" 
              {...form.register('company')} 
              className={form.formState.errors.company ? 'border-red-500' : ''}
            />
            {form.formState.errors.company && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.company.message}</p>
            )}
          </div>
          <div>
            <Textarea
              placeholder="Tell us about your event"
              {...form.register('message')}
              className={`min-h-[100px] ${form.formState.errors.message ? 'border-red-500' : ''}`}
            />
            {form.formState.errors.message && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
            Send Message
          </Button>
        </form>
      )}
    </div>
  );
}