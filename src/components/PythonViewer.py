import py3Dmol

def display_pdb_file(pdb_filepath):
    # Read the PDB file contents
    with open(pdb_filepath, 'r') as pdb_file:
        pdb_data = pdb_file.read()

    # Create a py3Dmol view
    view = py3Dmol.view(width=400, height=350)
    view.addModel(pdb_data, 'pdb')
    view.setStyle({'cartoon': {'color': 'spectrum'}})
    view.zoomTo()

    # Display the view
    return view.show()
