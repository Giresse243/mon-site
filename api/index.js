// Simple API endpoint for contact form submissions
export default function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, phone, subject, message } = req.body;

        // Basic validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ 
                error: 'Missing required fields' 
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                error: 'Invalid email format' 
            });
        }

        // Here you would typically:
        // 1. Save to database
        // 2. Send email notification
        // 3. Log the contact request
        
        // For now, we'll just log the data and return success
        console.log('Contact form submission:', {
            name,
            email,
            phone: phone || 'Not provided',
            subject,
            message,
            timestamp: new Date().toISOString()
        });

        // Simulate processing time
        setTimeout(() => {
            res.status(200).json({ 
                success: true, 
                message: 'Message received successfully' 
            });
        }, 1000);

    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({ 
            error: 'Internal server error' 
        });
    }
} 