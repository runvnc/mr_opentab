from lib.providers.commands import command

@command()
async def open_web_page(url, context=None):
    """Open a web page in a new tab on the user's screen.
    
    Parameters:
    url (str): Web page to open
    
    Example:

    { "open_web_page": { "url": "https://www.google.com" } }

    """
    return None

