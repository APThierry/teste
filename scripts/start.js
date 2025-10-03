const port = process.env.PORT || process.env.port || '3010';

process.argv = ['node', 'next', 'start', '-p', port];

require('next/dist/bin/next');
