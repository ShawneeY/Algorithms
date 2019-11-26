/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    // BFS : search through the graph not finding the shortest path
    
    var newGraph = {val:null, neighbors:[]};

    var helper = function(node){
        if( node.visited){
            return node;
        }
        var val = node.val;
        
        node['visited'] = true;
       
        
        newGraph.val = val;
        

        newGraph.neighbors[0] = helper(node.neighbors[0]);
        newGraph.neighbors[1] = helper(node.neighbors[1]);
        console.log(newGraph)
        return newGraph
        
    }
    helper(node)
    return newGraph;
};