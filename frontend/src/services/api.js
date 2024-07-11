const API_URL = process.env.REACT_APP_API_URL

export const login = async (email, password) => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    
    const data = await response.json()
    if(!response.ok) {
        throw new Error(data.message || 'Failed to login');
    }

    return data;
}

export const register = async (username, email, password) => {
    const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    })

    if(!response.ok) {
        const data = await response.json()
        throw new Error(data.message || 'Failed to register');
    }
}

export const getBlogs = async () => {
    const response = await fetch(`${API_URL}/blogs`);
    const data = await response.json();
    return data;
};

export const createBlog = async (blog, token) => {
    const response = await fetch(`${API_URL}/blogs`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(blog)
    });

    const data = await response.json();
    if(!response.ok) {
        throw new Error(data.message || 'Failed to create blog');
    }

    return data;
}

export const updateBlog = async (id, blog, token) => {
    const response = await fetch(`${API_URL}/blogs/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(blog)
    });

    const data = await response.json();
    if(!response.ok) {
        throw new Error(data.message || 'Failed to update blog');
    }

    return data;
}

export const deleteBlog = async (id, token) => {
    const response = await fetch(`${API_URL}/blogs/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if(!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to delete blog');
    }
}