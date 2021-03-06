export interface Business {
  $key?: string;
  company?: string;
  description?: string;
  category: string;
  years_in_business?: number;
  street_address?: string;
  city: string;
  zipcode?: string;
  state?: string;
  phone?: string;
  email?: string;
  created_at: string;
}
