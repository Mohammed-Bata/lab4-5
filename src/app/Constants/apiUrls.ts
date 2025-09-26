import { environment } from '../environments/environment';

const apiUrl = environment.ApiUrl;

export const apiUrls = {
  getAllProducts: `${apiUrl}products`,
  getProduct: `${apiUrl}products`,
  AddProduct: `${apiUrl}products`,
  deleteProduct: `${apiUrl}products`,
  getCategories: `${apiUrl}products/categories`,
  getCategoriesProducts: `${apiUrl}products/category`,

  login: `${apiUrl}auth/login`,
};
