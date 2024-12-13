export const globalFormHandler = (id: string, value: any, setFormData: any) => {
  setFormData((prev: any) => ({ ...prev, [id]: value }));
};
