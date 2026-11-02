# Product image resolution fix

The live DROP 001 product cards were previously loading tiny JPEG assets (roughly 80×100 pixels for the Max front image) and stretching them across mobile product cards, causing visible blur.

This fix replaces all six storefront product photos with the approved original-resolution JPEGs at 1122×1402 pixels, switches the storefront to cache-busted filenames, and adds a browser test that fails when a product image reports less than 1000px intrinsic width or 1200px intrinsic height.
