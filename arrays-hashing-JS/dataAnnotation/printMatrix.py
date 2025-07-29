import urllib.request

def extract_all_text(html):
    texts = []
    pos = 0
    while True:
        start = html.find('>', pos)
        if start == -1:
            break
        end = html.find('<', start)
        if end == -1:
            break
        text = html[start+1:end].strip()
        if text:
            texts.append(text)
        pos = end + 1
    return texts

def print_matrix_from_google_doc(url):
    with urllib.request.urlopen(url) as response:
        html = response.read().decode('utf-8')

    all_texts = extract_all_text(html)
    
    # Find the table headers to locate where data starts
    try:
        x_coord_idx = all_texts.index('x-coordinate')
        char_idx = all_texts.index('Character')
        y_coord_idx = all_texts.index('y-coordinate')
        
        # Data starts after the headers
        data_start = max(x_coord_idx, char_idx, y_coord_idx) + 1
        
    except ValueError:
        print("Could not find table headers. Document format may have changed.")
        print("Available texts:", all_texts[:20])  # Show first 20 for debugging
        return
    
    # Extract data in groups of 3 (x, char, y)
    data_texts = all_texts[data_start:]
    points = []
    max_x = max_y = 0
    
    # Process data in groups of 3
    for i in range(0, len(data_texts) - 2, 3):
        try:
            x = int(data_texts[i])
            char = data_texts[i + 1]
            y = int(data_texts[i + 2])
            
            points.append((x, y, char))
            max_x = max(max_x, x)
            max_y = max(max_y, y)
            
        except (ValueError, IndexError):
            # Skip invalid data or end of data
            break
    
    if not points:
        print("No valid coordinate data found.")
        print("Sample data texts:", data_texts[:10])
        return
    
    # Create and populate grid
    grid = [[' ' for _ in range(max_x + 1)] for _ in range(max_y + 1)]
    for x, y, char in points:
        grid[y][x] = char
    
    # Print the matrix (flip vertically since y=0 should be at bottom)
    print("Generated Matrix:")
    for row in reversed(grid):
        print(''.join(row))

# Test the function
print_matrix_from_google_doc('https://docs.google.com/document/d/e/2PACX-1vRMx5YQlZNa3ra8dYYxmv-QIQ3YJe8tbI3kqcuC7lQiZm-CSEznKfN_HYNSpoXcZIV3Y_O3YoUB1ecq/pub')