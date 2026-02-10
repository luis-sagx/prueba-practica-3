module.exports = [
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'commonjs',
        },
        rules: {
            // Punto y coma obligatorio
            'semi': ['error', 'always'],
            // Comillas simples
            'quotes': ['error', 'single'],
            // Indentación de 4 espacios
            // 'indent': ['error', 4],
            // Sin variables sin usar
            'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
            // Sin console.log en producción (warn)
            // 'no-console': 'warn',
            // Espacios antes de llaves de función
            'space-before-blocks': 'error',
            // Sin espacios múltiples
            'no-multi-spaces': 'error',
            // Usar const cuando sea posible
            'prefer-const': 'error',
            // Sin var, usar let o const
            'no-var': 'error',
            // Comparaciones estrictas (=== en lugar de ==)
            'eqeqeq': ['error', 'always'],
        },
    },
];