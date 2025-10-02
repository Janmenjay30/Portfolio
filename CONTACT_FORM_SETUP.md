# Contact Form Email Setup Guide

## Step 1: Sign Up for FormSpree (Free)

1. Go to **https://formspree.io/**
2. Click **"Sign Up"** (top right)
3. Sign up with your email: **janmenjaypanigrahi300@gmail.com**
4. Verify your email address

## Step 2: Create a New Form

1. After logging in, click **"+ New Form"**
2. Give it a name: **"Portfolio Contact Form"**
3. Your email will be automatically set to: **janmenjaypanigrahi300@gmail.com**
4. Click **"Create Form"**

## Step 3: Get Your Form ID

After creating the form, you'll see your **Form Endpoint**:
```
https://formspree.io/f/YOUR_FORM_ID
```

Example: `https://formspree.io/f/xwpkeyzv`

Copy the **YOUR_FORM_ID** part (like `xwpkeyzv`)

## Step 4: Update Your Portfolio Code

Open `src/components/Contact.jsx` and find this line:
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

Replace `YOUR_FORM_ID` with your actual form ID.

Example:
```javascript
const response = await fetch('https://formspree.io/f/xwpkeyzv', {
```

## Step 5: Test It!

1. Save the file
2. Go to your portfolio: http://localhost:5173/
3. Fill out the contact form
4. Click "Send Message"
5. Check your email: **janmenjaypanigrahi300@gmail.com**

## What You'll Receive:

When someone submits the form, you'll get an email with:
- **Subject**: "New submission from Portfolio Contact Form"
- **Sender's Name**: From the form
- **Sender's Email**: From the form (you can reply directly!)
- **Message**: Their message

## FormSpree Features (Free Plan):

✅ 50 submissions per month
✅ Email notifications to you
✅ Spam filtering
✅ Export submissions as CSV
✅ View all submissions in dashboard

## Alternative: EmailJS (If you prefer)

If you want more customization:

1. Go to **https://www.emailjs.com/**
2. Sign up with your email
3. Create an email service (Gmail)
4. Create an email template
5. Get your Service ID, Template ID, and Public Key
6. Follow their React integration guide

---

## Quick Copy-Paste Instructions:

1. **Sign up**: https://formspree.io/
2. **Create form** with name "Portfolio Contact Form"
3. **Copy your form ID** (e.g., `xwpkeyzv`)
4. **Edit** `src/components/Contact.jsx` line 27
5. **Replace** `YOUR_FORM_ID` with your actual ID
6. **Save** and test!

---

**Your email for notifications**: janmenjaypanigrahi300@gmail.com

**Form is already updated** - just need your FormSpree Form ID!
