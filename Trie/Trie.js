class TrieNode{
    constructor(){
        this.children= new Map()
        this.isEndOfWord = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode
    }
    insert(word){
        let node = this.root
        for(let char of word){
            if(!node.children.has(char)){
                node.children.set(char,new TrieNode())
            }
            node = node.children.get(char)
        }
        return node.isEndOfWord
    }
    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children.has(char)){
                return false
            }
            node = node.children.get(char)
        }
        return node.isEndOfWord
    }

    startsWith(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children.has(char)){
                return false
            }
            node = node.children.get(char)
        }
        return true , node
    }
}

const trie = new Trie()
trie.insert('zeek')
trie.insert('eren')

console.log(trie.startsWith('ze'));
console.log(trie.search('zeek'));