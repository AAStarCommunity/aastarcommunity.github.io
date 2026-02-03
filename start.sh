#!/bin/bash

# AAStar Website Local Run Script

# Function to kill processes on specific ports
kill_ports() {
    ports=(5173 5174 5175 5177)
    for port in "${ports[@]}"; do
        pid=$(lsof -t -i:"$port")
        if [ -n "$pid" ]; then
            echo "Killing process $pid on port $port..."
            kill -9 "$pid" 2>/dev/null
        fi
    done
}

show_help() {
    echo "Usage: ./start.sh [command]"
    echo ""
    echo "Commands:"
    echo "  dev      Start development server (HMR) on port 5177"
    echo "  build    Build the static production files"
    echo "  preview  Preview the production build locally on port 5177"
    echo "  help     Show this help message"
}

case "$1" in
    dev)
        kill_ports
        echo "Starting development server on port 5177..."
        pnpm vite --port 5177
        ;;
    build)
        echo "Building static files..."
        pnpm build
        ;;
    preview)
        kill_ports
        echo "Starting local preview of production build on port 5177..."
        pnpm vite preview --port 5177
        ;;
    *)
        if [ -z "$1" ]; then
            kill_ports
            echo "No command specified, starting development server on port 5177..."
            pnpm vite --port 5177
        else
            show_help
        fi
        ;;
esac
