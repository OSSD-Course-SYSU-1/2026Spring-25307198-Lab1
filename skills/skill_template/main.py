def handle(event):
    """Example handler for a skill event."""
    print("Received event:", event)
    return {"status": "ok", "echo": event}