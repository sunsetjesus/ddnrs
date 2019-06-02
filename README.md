
# ddnrs - A distributed domain name resolution system

                      Midsummer-sqro2
                   sqro2project@gmail.com




# Intro

ddnrs is a domain name system which data components exists in the bitcoin blockchain and it's protocol works on top of the bitcoin (**bsv**) protocol 

# Why ddnrs ? 

The current domain name system is not efficient in certain areas. Such as - 

###  Complication : 
The structure is far more complicated than it needs to be. For example to register a domain name for a server address first go thru certified authority setting name servers and modify dns records for the required specification etc. And to resolve a domain name the client has top send request to individual tld name servers which have layers of complexities that needs to be eliminated for the next gen of internet with the integration of iot space.


### Artificial Scarcity :
In the current centralised dns system it's very difficult to create and register new tlds that can represent a service or application in meaningful way. For example if a  service requires the domain "bitcoin.wallet" with the tld "wallet" it's going to be very difficult to acquire that tld in order to represent that service. This whole process is very lengthy as well as costs a lot of money. This type of limitation does not make sense for a system that maps IP address to human friendly address

### Cost :
The current DNS registration process cost a lot of money which is not ideal for the new emerging economy with internet of things. With blockchain based domain name such a ddnrs it cost get reduced to tiny fraction of what average registration cost of the current system.

### Points of failure : 
One technical issue with the current domain name system is that the root servers not much distributed and due to which they still prone to ddos man in the middle attack and other attack vectors


# The Solution

With ddnrs decentralised public ledger it's possible to have a open,non-complicated , robust, secure and inexpensive domain name system that can power the future internet with iot space.

### Open Source :
The ddnrs domain name system and the ddnrs protocol is fully open sourced with MIT licence 

### Simple : 
Due to simple and lightweight nature of the  protocol ddnrs provides more degrees of freedom to build complicated utilities on top of it.

### No sidechain or separate blockchain :
The ddnrs protocol is designed to work with the bsv blockchain in order to take advantages distributed immutable nature of the global database. It doesn't have it's own blockchain or  a sidechain hence no requirements for using another coins or tokens. 

### Non-limiting :
By providing greater byte size for tld,sld and extension it's possible to generate much greater range of domain names which is simply not possible with the current system.

### Secure :
Because of the fact that it exists on the blockchain, it's immune to to attack vectors such as ddos,man in the middle, dns hijacking etc.

### Negligible cost : 
With average tx fees on bitcoin blockchain (bsv) being less than $0.002, creating a dnr (domain name record) in ddnrs is almost free.


# The ddnrs protocol

The ddnrs protocol works on top of the bitcoin's op_return transaction. A ddnrs dnr (domain name record) looks like this -
**op_return < ddnrs prefix > < dnr hex string >**

ddnrs prefix : 1NCSMuVcq33nRDLa5LNGkQY2PgfzMVhPp6 (generated with the bitcom protocol)

The ddnrs prefix is generated using the bitcom protocol.
A domain name in ddnrs looks like this -
**subext.sld.ext**
It has three components appended with the delimiter '.' .
**subext** : subext reffers to sub extention or subdomain
**sld**        : second level domain
**ext**       : domain extention or top level domain

# Protocol Rules 

### Data structure rules :
The ddnrs dnr hex string has the following data structure -

  * 32 bytes of ddnrs prefix
  * 2 bytes ddnrs version no
  * 8 bytes dnr ID
  * 8 bytes genesis dnr ID (in case of genesis dnr ID, it's value is 0)
  * 128 bytes ext (utf-32)
  * 512 bytes sld (utf-32)
  * 128 bytes sub-ext (utf-32)
  * 32 bytes hash of the previous data
  * 32 bytes pubkey
  * signature 
  
### Genesis rules : 
  * All dnr prior to block n is invalid
  * All dnr from block n is considered valid
    (block n is yet to be determined)

### Auth rules : 
   * The hash must be valid
   * The signature must be valid with respect to the hash of the dnr
   * The ddnrs prefix must be 
   * The dnr ID must contain a valid unix timestamp
   * The genesis dnr ID must be unique for each dnr chain

### Cryptography rules : 
   * The dnr is hashed using sha-256
   * the hash is sighned using rsa-2048

### Dnr validation rules : 
   * A dnr is considered valid if it fulfils all the data structure rules && genesis rules && auth rules && cryptography rules
 
### Relational rules : 

   * A dnr pool is set of all valid dnr with the same sld
   * A valid dnr is considered to be genesis dnr if it's dnr ID and have genesis dnr ID of 0 and have the least tx height in a dnr pool

### Dnr chain rule :
* A valid dnr chain is formed when records of a dnr pool points to the same genesis dnr and signed by the private key which was used to sign the genesis dnr.
* The genesis dnr in a dnr chain must have height 0
* The dnr height is increased by a sum of 1 for each new record added to the chain

### Collision rules : 
 * When multiple valid records in a dnr pool have the same dnr ID, the record with greater tx height excluded from the dnr chain
 * When multiple valid dnr in dnr pool have the same dnr ID with the same tx height, only one is included in the dnr chain.
 * When multiple valid dnr in a dnr pool have the same sld, ext and sub-ext, the record with smallest dnr ID and smallest tx height is included in the dnr chain.

### Cryptography rules : 

 * The dnr is hashed using sha-256
 * The dnr is encrypted using rsa-2048




### Licence 

ddnrs is released under the terms of the Open BSV license. See [LICENSE](https://github.com/midsummer-sqro2/ddnrs/blob/master/LICENCE) for more information.
