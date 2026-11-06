// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @title Test USDG (tUSDG)
/// @notice Token UJI untuk testnet Corvid: 6 desimal seperti USDG, `mint` terbuka untuk siapa saja.
///         JANGAN dipakai di mainnet; mainnet memakai USDG resmi (lihat packages/shared/src/chains.ts).
contract TestUSDG {
    string public constant name = "Test USDG";
    string public constant symbol = "tUSDG";
    uint8 public constant decimals = 6;
    /// Batas sekali mint (10.000 tUSDG) agar faucet tidak absurd.
    uint256 public constant MAX_MINT = 10_000 * 10 ** 6;

    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    function mint(address to, uint256 amount) external {
        require(amount <= MAX_MINT, "mint too large");
        totalSupply += amount;
        balanceOf[to] += amount;
        emit Transfer(address(0), to, amount);
    }

    function approve(address spender, uint256 value) external returns (bool) {
        allowance[msg.sender][spender] = value;
        emit Approval(msg.sender, spender, value);
        return true;
    }

    function transfer(address to, uint256 value) external returns (bool) {
        _transfer(msg.sender, to, value);
        return true;
    }

    function transferFrom(address from, address to, uint256 value) external returns (bool) {
        uint256 allowed = allowance[from][msg.sender];
        if (allowed != type(uint256).max) {
            require(allowed >= value, "allowance");
            allowance[from][msg.sender] = allowed - value;
        }
        _transfer(from, to, value);
        return true;
    }

    function _transfer(address from, address to, uint256 value) private {
        require(balanceOf[from] >= value, "balance");
        unchecked {
            balanceOf[from] -= value;
        }
        balanceOf[to] += value;
        emit Transfer(from, to, value);
    }
}
