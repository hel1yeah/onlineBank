const formatter = new Intl.NumberFormat('us-US', {
  currency: 'USD',
  style: 'currency',
});

export function currentcy(value) {
  return formatter.format(value);
}
