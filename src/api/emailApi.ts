export const submitContact = async (data: any) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to submit contact form');
  return response.json();
};

export const submitPrayerRequest = async (data: any) => {
  const response = await fetch('/api/prayer', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to submit prayer request');
  return response.json();
};

export const submitPartnership = async (data: any) => {
  const response = await fetch('/api/partnership', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to submit partnership form');
  return response.json();
};
