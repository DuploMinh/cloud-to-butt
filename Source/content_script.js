walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bTrump\b/g, "Obama");
	v = v.replace(/\bDonald Trump\b/g, "Barack Obama");
	v = v.replace(/\bdonald Trump\b/g, "barack Obama");
	v = v.replace(/\bDonald trump\b/g, "Barack obama");
	v = v.replace(/\bdonald trump\b/g, "barack bbama");
	textNode.nodeValue = v;
}


