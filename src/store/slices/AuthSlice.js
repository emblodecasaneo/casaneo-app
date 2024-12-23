import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Action asynchrone pour la connexion
export const login = createAsyncThunk(
    'auth/login',
    async (loginData, { rejectWithValue }) => {
        console.log('logggggginnndata', loginData);
        try {
            // Effectuer la requête POST avec fetch
            const response = await fetch('http://127.0.0.1:8000/affiliate/login-api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(loginData), // Envoi des données au format JSON
            });

            // Vérifier si la requête a réussi
            if (!response.ok) {
                const errorData = await response.json();
                return rejectWithValue({
                    message: errorData.message || 'Une erreur est survenue',
                    details: errorData.details || 'Erreur serveur',
                });
            }

            // Extraire les données de la réponse
            const data = await response.json();
            console.log('Réponse complète:', data);
            return data; // Retourne les données utilisateur et token si la connexion est réussie
        } catch (error) {
            // Gérer les erreurs générales
            console.error('Erreur backend:', error.message);
            return rejectWithValue({
                message: 'Une erreur est survenue',
                details: error.message,
            });
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        loading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.loading = false;

                // Stocker le token dans localStorage
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Capturer l'erreur retournée par le backend
            });
    },
});

// Export des actions et du reducer
export const { logout } = authSlice.actions;
export default authSlice.reducer;
